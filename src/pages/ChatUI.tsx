import Header from '../components/InterfaceHeader'
import Hero from '../components/InterfaceHero'
import Composer from '../components/InterfaceComposer'

function ChatUI() {
  return (
    <div className='m-auto flex flex-col h-screen overflow-y-scroll'>
        <Header />
        <Hero />
        <Composer />
    </div>
  )
}

export default ChatUI;