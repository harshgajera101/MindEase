import { useState } from 'react'
import axios from 'axios'

type Message = {
  from: 'user' | 'bot',
  text: string
}

export default function Chat(){
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [model, setModel] = useState<'GRU' | 'LSTM'>('GRU')
  const [loading, setLoading] = useState(false)

  const send = async () => {
    if (!input.trim()) return
    const userMsg: Message = { from: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:8000/api/chat', { message: userMsg.text, model })
      const reply = res.data?.reply ?? "Sorry, something went wrong."
      setMessages(prev => [...prev, { from: 'bot', text: reply }])
    } catch (err) {
      setMessages(prev => [...prev, { from: 'bot', text: "Couldn't reach server. Try again later." }])
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Chat with MindEase</h1>

      <div className="mb-4 flex items-center gap-4">
        <label className="text-sm">Model:</label>
        <select value={model} onChange={e => setModel(e.target.value as 'GRU'|'LSTM')} className="border px-3 py-1 rounded">
          <option value="GRU">GRU</option>
          <option value="LSTM">LSTM</option>
        </select>
      </div>

      <div className="border rounded-lg p-4 max-w-3xl mx-auto shadow bg-white">
        <div className="space-y-3 h-64 overflow-auto mb-4">
          {messages.length === 0 && <div className="text-gray-500">Say hi — the bot is listening.</div>}
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`${m.from === 'user' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-gray-900'} px-4 py-2 rounded-lg max-w-[80%]`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') send() }}
            className="flex-1 border rounded px-3 py-2"
            placeholder="Type how you're feeling..."
          />
          <button onClick={send} disabled={loading} className="bg-sky-600 text-white px-4 py-2 rounded disabled:opacity-60">
            {loading ? '...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  )
}
