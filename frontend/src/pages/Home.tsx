import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-sky-600 mb-4">MindEase</h1>
        <p className="text-lg text-gray-700 mb-6">An AI-powered chatbot that provides emotional support for anxiety and depression — compassionate, confidential, and accessible.</p>
        <Link to="/chat" className="inline-block bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700">Start Chatting</Link>
      </section>

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">What it does</h3>
          <p className="text-sm text-gray-600">Offers empathetic conversation, grounding prompts, and basic coping tips. Not a substitute for professional care.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">How it helps</h3>
          <p className="text-sm text-gray-600">Helps users clarify emotions, gives calming exercises, and suggests resources when appropriate.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">About the chatbot</h3>
          <p className="text-sm text-gray-600">Models trained using LSTM & GRU on mental-health dialogue intents with safe fallbacks and disclaimers.</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Ethical note</h2>
        <p className="text-gray-600">MindEase provides non-clinical support. If you or someone is at risk, contact a mental health professional or emergency services immediately.</p>
      </section>
    </div>
  )
}
