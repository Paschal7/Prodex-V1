export const codeExample = {
  "App.jsx": `
    import {usetate, useEffect} from 'react'
    import {ProdexIDE} from 'prodex-ide'
    
    function App() {
      const [code, setCode] = useState('');
      
      const handleAICompletion = async (response) => {
        const suggestion = await response.text()    
        setCode(suggestion);
        };

        return (
            <div className="App">
                <ProdexIDE
                    onChange={setCode}
                    onAIR={handleAICompletion}
                    />
            </div>
        );
      `,
  "Hero.jsx": `
    import {usetate} from 'react'
    import {ProdexIDE} from 'prodex-ide'
    
    function Hero() {
      const [code, setCode] = useState('');
      
      const handleAICompletion = async (response) => {
        const suggestion = await response.text()    
        setCode(suggestion);
        };

        return (
            <div className="App">
                <ProdexIDE
                    onChange={setCode}
                    onAIR={handleAICompletion}
                    />
            </div>
        );
      `,
  "Navbar.jsx": `
    import {usetate, useEffect} from 'react'
    import {ProdexIDE} from 'prodex-ide'
    
    function Navbar() {
      const [code, setCode] = useState('');
      
      const handleAICompletion = async (response) => {
        const suggestion = await response.text()    
        setCode(suggestion);
        };

        return (
            <div className="App">
                <ProdexIDE
                    onChange={setCode}
                    onAIR={handleAICompletion}
                    />
            </div>
        );
      `
}

export const floatingCard= {
  "App.jsx": {
    bgColor: "blue-500/30",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "AI-Powered Code Generation",
    content: "Generate code snippets, functions, or even entire files using natural language prompts. Just describe what you need, and watch the magic happen!"

  },
    "Hero.jsx": {
    bgColor: "emerald-500/30",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "AI",
    title: "AI-Powered Code Generation",
    content: "Generate code snippets, functions, or even entire files using natural language prompts."

  },
    "Navbar.jsx": {
    bgColor: "purple-500/30",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "AI",
    title: "AI-Powered Code Generation",
    content: "Generate code snippets, functions, or even entire files using natural language prompts. Just describe what you need, and watch the magic happen!"

  },
}