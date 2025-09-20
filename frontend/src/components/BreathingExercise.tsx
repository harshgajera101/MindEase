import React, { useEffect, useRef, useState } from "react";

type BreathingPhase = {
  phase: string;
  text: string;
  duration: number; // milliseconds
  scale: string; // tailwind scale class like "scale-125"
  pulse?: boolean; // optional: tiny pulse on hold
};

const BreathingExercise: React.FC = () => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<string>("ready");
  const [breathingTimer, setBreathingTimer] = useState<number>(60); // seconds
  const [selectedDuration, setSelectedDuration] = useState<number>(60); // seconds

  // refs to avoid stale closures
  const breathingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isBreathingRef = useRef<boolean>(false);
  const breathingTimerRef = useRef<number>(selectedDuration);

  // typed phases (durations in ms)
  const breathingPhases: BreathingPhase[] = [
    { phase: "inhale", text: "Breathe In", duration: 4000, scale: "scale-125" },
    { phase: "hold", text: "Hold", duration: 2000, scale: "scale-125", pulse: true },
    { phase: "exhale", text: "Breathe Out", duration: 6000, scale: "scale-90" },
    { phase: "rest", text: "Rest", duration: 1000, scale: "scale-100" },
  ];

  // helper: always return a full BreathingPhase (no missing props)
  const getCurrentBreathingPhase = (): BreathingPhase => {
    return (
      breathingPhases.find((p) => p.phase === breathingPhase) || {
        phase: "ready",
        text: "Ready to Begin",
        duration: 1000,
        scale: "scale-100",
      }
    );
  };

  // format timer
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // starts the countdown interval (1s)
  const startCountdown = (secs: number) => {
    // ensure any previous interval cleared
    if (breathingIntervalRef.current) {
      clearInterval(breathingIntervalRef.current);
    }

    breathingTimerRef.current = secs;
    setBreathingTimer(secs);

    breathingIntervalRef.current = setInterval(() => {
      setBreathingTimer((prev) => {
        const next = prev <= 1 ? 0 : prev - 1;
        breathingTimerRef.current = next;
        if (next === 0) {
          stopBreathing();
        }
        return next;
      });
    }, 1000);
  };

  // phase cycle using refs to avoid stale state inside setTimeout
  const startPhaseCycle = () => {
    let currentIndex = 0;

    const runPhase = () => {
      if (!isBreathingRef.current || breathingTimerRef.current <= 0) return;

      const phase = breathingPhases[currentIndex];
      setBreathingPhase(phase.phase);

      // clear any old timeout
      if (phaseTimeoutRef.current) {
        clearTimeout(phaseTimeoutRef.current);
      }

      phaseTimeoutRef.current = setTimeout(() => {
        currentIndex = (currentIndex + 1) % breathingPhases.length;
        // continue only if still breathing and time remains
        if (isBreathingRef.current && breathingTimerRef.current > 0) {
          runPhase();
        }
      }, phase.duration);
    };

    runPhase();
  };

  const startBreathing = (durationSeconds?: number) => {
    const dur = durationSeconds ?? selectedDuration;
    setSelectedDuration(dur);
    isBreathingRef.current = true;
    setIsBreathing(true);

    // set timer & start countdown
    startCountdown(dur);

    // start phases
    startPhaseCycle();
  };

  const stopBreathing = () => {
    // clear timers
    if (breathingIntervalRef.current) {
      clearInterval(breathingIntervalRef.current);
      breathingIntervalRef.current = null;
    }
    if (phaseTimeoutRef.current) {
      clearTimeout(phaseTimeoutRef.current);
      phaseTimeoutRef.current = null;
    }

    isBreathingRef.current = false;
    setIsBreathing(false);
    setBreathingPhase("ready");
    setBreathingTimer(0);
    breathingTimerRef.current = 0;
  };

  const resetSession = () => {
    stopBreathing();
    setBreathingTimer(selectedDuration);
    breathingTimerRef.current = selectedDuration;
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (breathingIntervalRef.current) clearInterval(breathingIntervalRef.current);
      if (phaseTimeoutRef.current) clearTimeout(phaseTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentPhase = getCurrentBreathingPhase();
  const transitionMs = currentPhase.duration; // sync transition time with phase

  // SVG ring helpers
  const r = 48;
  const circumference = 2 * Math.PI * r;
  const progressRatio = selectedDuration > 0 ? breathingTimer / selectedDuration : 0;
  const strokeOffset = circumference * (1 - progressRatio); // 0 = full circle, circumference = empty

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-blue-200">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center flex-wrap">
              Guided Breathing
            </h2>
            <p className="text-sm sm:text-base text-gray-700 px-2">
              Choose your duration and let the rhythm guide you to calmness
            </p>
          </div>

          {/* Duration buttons */}
          <div className="flex justify-center mb-6 sm:mb-8 space-x-2 sm:space-x-4">
            {[{ duration: 60, label: "1m" }, { duration: 180, label: "3m" }, { duration: 300, label: "5m" }].map(
              (opt) => (
                <button
                  key={opt.duration}
                  onClick={() => setSelectedDuration(opt.duration)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all text-sm sm:text-base font-medium ${
                    selectedDuration === opt.duration ? "bg-blue-500 text-white shadow-lg scale-105" : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                  }`}
                  disabled={isBreathing}
                >
                  {opt.label}
                </button>
              )
            )}
          </div>

          {/* Circle */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6 sm:mb-8">
              <div
                // use transform + transition-transform and dynamic duration
                className={`transform transition-transform ease-in-out w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 flex flex-col items-center justify-center text-gray-800 font-bold shadow-2xl border-4 border-white/50 ${currentPhase.scale} ${currentPhase.pulse ? "hold-pulse" : ""}`}
                style={{ transitionDuration: `${transitionMs}ms` }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl mb-2 text-center px-4">{currentPhase.text}</div>
                {isBreathing ? (
                  <div className="text-xs sm:text-sm font-normal text-gray-600">{formatTime(breathingTimer)}</div>
                ) : (
                  <div className="text-xs sm:text-sm font-normal text-gray-600 text-center px-4">
                    {selectedDuration / 60} minute{selectedDuration > 60 ? "s" : ""} session
                  </div>
                )}
              </div>

              {/* Progress ring */}
              {isBreathing && (
                <div className="absolute inset-0 rounded-full pointer-events-none">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="4" />
                    <circle
                      cx="50"
                      cy="50"
                      r={r}
                      fill="none"
                      stroke="rgb(59,130,246)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={`${circumference}`}
                      strokeDashoffset={`${strokeOffset}`}
                      className="transition-all"
                      style={{ transitionDuration: "500ms" }}
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* controls */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              {!isBreathing ? (
                <button
                  onClick={() => startBreathing()}
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base font-medium"
                >
                  Start Breathing
                </button>
              ) : (
                <button
                  onClick={stopBreathing}
                  className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base font-medium"
                >
                  Stop Session
                </button>
              )}

              {isBreathing && (
                <button
                  onClick={resetSession}
                  className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base font-medium"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* small CSS for hold pulse */}
      <style jsx>{`
        @keyframes holdPulse {
          0% { transform: scale(1.0); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1.0); }
        }
        .hold-pulse {
          animation: holdPulse 1200ms ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default BreathingExercise;
