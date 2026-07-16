import { useState } from 'react'

export default function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const formatJSON = () => {
    try {
      setError('')
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutput(formatted)
    } catch (e) {
      setError(e.message)
      setOutput('')
    }
  }

  const minifyJSON = () => {
    try {
      setError('')
      const parsed = JSON.parse(input)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
    } catch (e) {
      setError(e.message)
      setOutput('')
    }
  }

  const validateJSON = () => {
    try {
      setError('')
      JSON.parse(input)
      setError('✅ Valid JSON')
      formatJSON()
    } catch (e) {
      setError('❌ Invalid JSON: ' + e.message)
      setOutput('')
    }
  }

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output)
    }
  }

  const clearAll = () => {
    setInput('')
    setOutput('')
    setError('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-slate-800 rounded-lg shadow-2xl p-8 border border-slate-700">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">{ } JSON Formatter</h1>
            <p className="text-slate-400 text-sm">Format, validate, and minify JSON instantly</p>
          </div>

          <div className="flex gap-2 mb-6 flex-wrap">
            <button
              onClick={formatJSON}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition"
            >
              📐 Format
            </button>
            <button
              onClick={minifyJSON}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition"
            >
              🔧 Minify
            </button>
            <button
              onClick={validateJSON}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-medium transition"
            >
              ✓ Validate
            </button>
            <button
              onClick={copyToClipboard}
              disabled={!output}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded font-medium transition"
            >
              📋 Copy
            </button>
            <button
              onClick={clearAll}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-medium transition"
            >
              🗑️ Clear
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Input JSON</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your JSON here..."
                className="w-full h-96 px-4 py-3 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Output JSON</label>
              <textarea
                value={output}
                readOnly
                placeholder="Formatted JSON will appear here..."
                className="w-full h-96 px-4 py-3 bg-slate-700 border border-slate-600 rounded text-green-400 placeholder-slate-400 focus:outline-none resize-none"
              />
            </div>
          </div>

          {error && (
            <div className={`mt-4 p-4 rounded ${error.includes('✅') ? 'bg-green-900 bg-opacity-30 border border-green-600' : 'bg-red-900 bg-opacity-30 border border-red-600'}`}>
              <p className={error.includes('✅') ? 'text-green-300' : 'text-red-300'}>
                {error}
              </p>
            </div>
          )}
        </div>
      </div>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7039091592734005"
           crossorigin="anonymous"></script>
    </div>
  )
}
