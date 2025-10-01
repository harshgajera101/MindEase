import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Music,
  Wind,
  Coffee,
  Bird,
  Play,
  Pause,
  RotateCcw,
  Heart,
  Sparkles,
  Volume2,
  // Timer,
  // Book,
  Lightbulb,
  Waves,
  Sun,
  CloudRain,
  Star,
  Camera,
  Edit3,
  RefreshCw,
  Smile,
  Flower2,
  Move,
  BookOpen,
  MessageCircle,
  Zap,
  Radio,
} from "lucide-react";

export default function Relaxation() {
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState("ready");
  const [breathingTimer, setBreathingTimer] = useState(0);

  // Add these states at the top of your component
  const [selectedMusic, setSelectedMusic] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [journalEntry, setJournalEntry] = useState("");
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  const [selectedDuration, setSelectedDuration] = useState(60); // 1 minute default

  const breathingIntervalRef = useRef<number | null>(null);
  const phaseTimeoutRef = useRef<number | null>(null);

  // Breathing animation phases
  const breathingPhases = [
    { phase: "inhale", text: "Breathe In", duration: 4000, scale: "scale-125" },
    { phase: "hold", text: "Hold", duration: 2000, scale: "scale-125" },
    { phase: "exhale", text: "Breathe Out", duration: 6000, scale: "scale-90" },
    { phase: "rest", text: "Rest", duration: 1000, scale: "scale-100" },
  ];

  // Music/Sound options
  const musicOptions = [
    {
      id: 1,
      name: "Ocean Waves",
      icon: Waves,
      color: "from-blue-400 to-cyan-400",
      description: "Calming ocean sounds",
      audioUrl: "/sounds/ocean-waves.mp3",
    },
    {
      id: 2,
      name: "Forest Rain",
      icon: CloudRain,
      color: "from-green-400 to-emerald-400",
      description: "Gentle rainfall in nature",
      audioUrl: "/sounds/forest-rain.mp3",
    },
    {
      id: 3,
      name: "432 Hz Healing",
      icon: Sparkles,
      color: "from-purple-400 to-pink-400",
      description: "Healing frequency music",
      audioUrl: "/sounds/432hz-healing.mp3",
    },
    {
      id: 4,
      name: "Tibetan Bowls",
      icon: Radio,
      color: "from-orange-400 to-red-400",
      description: "Sacred singing bowls",
      audioUrl: "/sounds/tibetan-bowls.mp3",
    },
    {
      id: 5,
      name: "Wind Chimes",
      icon: Wind,
      color: "from-indigo-400 to-purple-400",
      description: "Soothing wind chimes",
      audioUrl: "/sounds/wind-chimes.mp3",
    },
    {
      id: 6,
      name: "Bird Songs",
      icon: Bird,
      color: "from-yellow-400 to-green-400",
      description: "Morning birds chirping",
      audioUrl: "/sounds/bird-songs.mp3",
    },
  ];

  // Quick tips for mood uplift
  const quickTips = [
    {
      icon: RefreshCw,
      text: "Take 5 deep breaths and feel your shoulders relax",
    },
    { icon: Sun, text: "Step outside for 2 minutes and feel the sunlight" },
    { icon: Heart, text: "Think of 3 things you're grateful for right now" },
    { icon: Coffee, text: "Drink a glass of water mindfully, sip by sip" },
    { icon: Move, text: "Stretch your arms above your head and twist gently" },
    { icon: Camera, text: "Look around and notice 5 beautiful details" },
    {
      icon: Music,
      text: "Play a song that makes you smile and move with the rhythm",
    },
    {
      icon: MessageCircle,
      text: "Text or call someone and share a kind word or compliment",
    },
    {
      icon: Smile,
      text: "Smile for 30 seconds - even a fake smile can boost your mood",
    },
    {
      icon: Flower2,
      text: "Inhale the scent of a flower, fruit, or your favorite fragrance",
    },
    { icon: Zap, text: "Do 10 jumping jacks or dance to release energy" },
    { icon: BookOpen, text: "Read one page of an uplifting book or quote" },
  ];

  // Journaling prompts
  const journalingPrompts = [
    "What is one thing that brought you joy today?",
    "Write about a moment when you felt completely at peace.",
    "What are you most grateful for in this moment?",
    "Describe a place where you feel most relaxed.",
    "What would you tell a friend who was feeling anxious?",
    "Write down three things you appreciate about yourself.",
  ];

  // Start breathing exercise
  const startBreathing = () => {
    setIsBreathing(true);
    setBreathingTimer(selectedDuration);
    cycleBreathingPhases();

    // Timer countdown
    const timerInterval = setInterval(() => {
      setBreathingTimer((prev) => {
        if (prev <= 1) {
          stopBreathing();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    breathingIntervalRef.current = timerInterval;
  };

  const cycleBreathingPhases = () => {
    let currentPhaseIndex = 0;

    const nextPhase = () => {
      if (!isBreathing && breathingTimer <= 0) return;

      const phase = breathingPhases[currentPhaseIndex];
      setBreathingPhase(phase.phase);

      phaseTimeoutRef.current = setTimeout(() => {
        currentPhaseIndex = (currentPhaseIndex + 1) % breathingPhases.length;
        nextPhase();
      }, phase.duration);
    };

    nextPhase();
  };

  const stopBreathing = () => {
    setIsBreathing(false);
    setBreathingPhase("ready");
    setBreathingTimer(0);
    if (breathingIntervalRef.current) {
      clearInterval(breathingIntervalRef.current);
    }
    if (phaseTimeoutRef.current) {
      clearTimeout(phaseTimeoutRef.current);
    }
  };

  const getCurrentBreathingPhase = () => {
    const phase = breathingPhases.find((p) => p.phase === breathingPhase);
    return phase || { text: "Ready to Begin", scale: "scale-100" };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    return () => {
      if (breathingIntervalRef.current)
        clearInterval(breathingIntervalRef.current);
      if (phaseTimeoutRef.current) clearTimeout(phaseTimeoutRef.current);
    };
  }, []);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.loop = true; // Loop the music
    audioRef.current.volume = volume;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle play/pause
  const togglePlayPause = (music: (typeof musicOptions)[0]) => {
    if (!audioRef.current) return;

    // If clicking on a different song
    if (selectedMusic !== music.id) {
      audioRef.current.src = music.audioUrl;
      audioRef.current.play();
      setSelectedMusic(music.id);
      setIsPlaying(true);
    }
    // If clicking the same song
    else {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Handle volume change
  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-30 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-25 animate-float-delayed"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-35 animate-float"></div>
          <div className="absolute bottom-60 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full opacity-20 animate-float-delayed"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 text-center max-w-4xl mx-auto pt-16 pb-12 px-6">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full mb-6 animate-pulse shadow-lg">
              <Heart className="w-10 h-10 text-white" fill="currentColor" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-6 animate-fade-in">
            Find Your Peace
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto animate-fade-in-delayed">
            Discover tranquility through mindful breathing, soothing sounds, and
            gentle practices designed to ease anxiety and bring inner calm.
          </p>
        </section>

        {/* Enhanced Breathing Exercise */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-blue-200">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center flex-wrap">
                  <Wind className="w-6 sm:w-8 h-6 sm:h-8 mr-2 sm:mr-3 text-blue-600" />
                  Guided Breathing
                </h2>
                <p className="text-sm sm:text-base text-gray-700 px-2">
                  Choose your duration and let the rhythm guide you to calmness
                </p>
              </div>

              {/* Duration Selection */}
              <div className="flex justify-center mb-6 sm:mb-8 space-x-2 sm:space-x-4">
                {[
                  { duration: 60, label: "1m" },
                  { duration: 180, label: "3m" },
                  { duration: 300, label: "5m" },
                ].map((option) => (
                  <button
                    key={option.duration}
                    onClick={() => setSelectedDuration(option.duration)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all text-sm sm:text-base font-medium ${
                      selectedDuration === option.duration
                        ? "bg-blue-500 text-white shadow-lg scale-105"
                        : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                    }`}
                    disabled={isBreathing}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Breathing Circle */}
              <div className="flex flex-col items-center">
                <div className="relative mb-6 sm:mb-8">
                  <div
                    className={`w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 flex flex-col items-center justify-center text-gray-800 font-bold shadow-2xl border-4 border-white/50 transition-all duration-[4000ms] ${
                      getCurrentBreathingPhase().scale
                    }`}
                  >
                    <div className="text-lg sm:text-xl lg:text-2xl mb-2 text-center px-4">
                      {getCurrentBreathingPhase().text}
                    </div>
                    {isBreathing && (
                      <div className="text-xs sm:text-sm font-normal text-gray-600">
                        {formatTime(breathingTimer)}
                      </div>
                    )}
                    {!isBreathing && (
                      <div className="text-xs sm:text-sm font-normal text-gray-600 text-center px-4">
                        {selectedDuration / 60} minute
                        {selectedDuration > 60 ? "s" : ""} session
                      </div>
                    )}
                  </div>

                  {/* Progress ring */}
                  {isBreathing && (
                    <div className="absolute inset-0 rounded-full">
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="none"
                          stroke="rgba(59, 130, 246, 0.2)"
                          strokeWidth="2"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="48"
                          fill="none"
                          stroke="rgb(59, 130, 246)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 48}`}
                          strokeDashoffset={`${
                            2 *
                            Math.PI *
                            48 *
                            (breathingTimer / selectedDuration)
                          }`}
                          className="transition-all duration-1000"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Instructions */}
                {isBreathing && (
                  <div className="text-center mb-6 px-4">
                    <p className="text-sm sm:text-base text-gray-700 mb-2">
                      Follow the circle and breathe naturally
                    </p>
                    <div className="flex justify-center items-center space-x-4 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>Inhale: 4s</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        <span>Hold: 2s</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                        <span>Exhale: 6s</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Control Buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                  {!isBreathing ? (
                    <button
                      onClick={startBreathing}
                      className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base font-medium"
                    >
                      <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                      Start Breathing
                    </button>
                  ) : (
                    <button
                      onClick={stopBreathing}
                      className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base font-medium"
                    >
                      <Pause className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                      Stop Session
                    </button>
                  )}

                  {isBreathing && (
                    <button
                      onClick={stopBreathing}
                      className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base font-medium"
                    >
                      <RotateCcw className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Music/Sounds Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-purple-200">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center flex-wrap">
                <Music className="w-8 sm:w-10 h-8 sm:h-10 mr-3 sm:mr-4 text-purple-600" />
                Healing Sounds
              </h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Immerse yourself in carefully selected frequencies for deep
                relaxation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {musicOptions.map((music) => (
                <div
                  key={music.id}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border ${
                    selectedMusic === music.id && isPlaying
                      ? "border-purple-300 ring-1 ring-purple-200"
                      : "border-white/20"
                  }`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${
                      music.color
                    } rounded-full flex items-center justify-center mb-4 mx-auto ${
                      selectedMusic === music.id && isPlaying
                        ? "animate-pulse"
                        : ""
                    }`}
                  >
                    <music.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                    {music.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {music.description}
                  </p>

                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => togglePlayPause(music)}
                      className="flex items-center px-6 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-gray-300 rounded-lg transition-all duration-200 shadow-sm hover:shadow text-gray-700"
                    >
                      {selectedMusic === music.id && isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" /> Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" /> Play
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Volume Control */}
            {selectedMusic && (
              <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-md mx-auto border border-gray-200">
                <div className="flex items-center space-x-4">
                  <Volume2 className="w-5 h-5 text-gray-600" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) =>
                      handleVolumeChange(parseFloat(e.target.value))
                    }
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <span className="text-sm text-gray-600 font-medium w-12 text-right">
                    {Math.round(volume * 100)}%
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Journaling Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-green-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center flex-wrap">
                  <Edit3 className="w-6 sm:w-8 h-6 sm:h-8 mr-2 sm:mr-3 text-green-600" />
                  Mindful Journaling
                </h2>
                <p className="text-gray-700 text-sm sm:text-base">
                  Express your thoughts and feelings in a safe, private space
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
                    Today's Prompt:
                  </h3>
                  <div className="bg-green-100 p-4 sm:p-6 rounded-xl border-l-4 border-green-400 mb-4">
                    <p className="text-gray-700 italic text-sm sm:text-base">
                      "{journalingPrompts[currentPromptIndex]}"
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setCurrentPromptIndex(
                        (prev) => (prev + 1) % journalingPrompts.length
                      )
                    }
                    className="text-green-600 hover:text-green-700 flex items-center text-sm transition-colors"
                  >
                    <RefreshCw className="w-4 h-4 mr-1" />
                    New Prompt
                  </button>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
                    Your Thoughts:
                  </h3>
                  <textarea
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    placeholder="Write freely... your thoughts are safe here."
                    className="w-full h-28 sm:h-32 p-3 sm:p-4 border border-gray-200 rounded-xl focus:border-green-400 focus:outline-none resize-none bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                  />
                  <div className="flex justify-between items-center mt-2 text-xs sm:text-sm text-gray-500">
                    <span>{journalEntry.length} characters</span>
                    <span className="flex items-center">
                      <Heart className="w-3 sm:w-4 h-3 sm:h-4 mr-1 text-red-400" />
                      Private & Secure
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Mood Uplift Tips */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-100 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-orange-200">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center flex-wrap">
                <Lightbulb className="w-8 sm:w-10 h-8 sm:h-10 mr-3 sm:mr-4 text-orange-600" />
                Instant Mood Boosters
              </h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Simple actions that can shift your energy in just minutes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <tip.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{tip.text}</p>
                  <div className="mt-4 text-orange-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Try this now →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grounding Exercise */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-indigo-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center flex-wrap">
                  <Star className="w-6 sm:w-8 h-6 sm:h-8 mr-2 sm:mr-3 text-indigo-600" />
                  5-4-3-2-1 Grounding
                </h2>
                <p className="text-gray-700 text-sm sm:text-base">
                  Use your senses to anchor yourself in the present moment
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center mb-6 sm:mb-8">
                <div className="bg-white/80 p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">5</div>
                  <p className="text-sm text-gray-600">
                    Things you can <strong>see</strong>
                  </p>
                </div>
                <div className="bg-white/80 p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    4
                  </div>
                  <p className="text-sm text-gray-600">
                    Things you can <strong>touch</strong>
                  </p>
                </div>
                <div className="bg-white/80 p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">
                    3
                  </div>
                  <p className="text-sm text-gray-600">
                    Things you can <strong>hear</strong>
                  </p>
                </div>
                <div className="bg-white/80 p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-pink-600 mb-2">2</div>
                  <p className="text-sm text-gray-600">
                    Things you can <strong>smell</strong>
                  </p>
                </div>
                <div className="bg-white/80 p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    1
                  </div>
                  <p className="text-sm text-gray-600">
                    Thing you can <strong>taste</strong>
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button className="px-6 sm:px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transform hover:scale-105 transition-all shadow-lg text-sm sm:text-base font-medium">
                  Start Grounding Exercise
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.2s ease-out;
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #4b5563; /* gray-600 */
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.2s;
        }

        .slider::-webkit-slider-thumb:hover {
          background: #1f2937; /* gray-800 */
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #4b5563;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          transition: background 0.2s;
        }

        .slider::-moz-range-thumb:hover {
          background: #1f2937;
        }
      `}</style>
    </>
  );
}
