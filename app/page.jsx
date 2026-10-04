'use client';

import { useState } from 'react';

function Icon({ name, size = 20, ...props }) {
    const paths = {
        arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
        download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" />,
        mic: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8" /></>,
        shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-5" /></>,
        spark: <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />,
        chat: <><path d="M21 11a8 8 0 0 1-8 8H8l-5 3 1.5-6A8 8 0 1 1 21 11Z" /><path d="M8 10h8m-8 4h5" /></>,
        globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
        book: <path d="M12 5C8 2 3 4 3 4v15s5-2 9 1c4-3 9-1 9-1V4s-5-2-9 1v15Z" />,
        people: <><circle cx="9" cy="8" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3m2-16a3 3 0 0 1 0 6m1 4a5 5 0 0 1 3 4v2" /></>,
        check: <path d="m5 12 4 4L19 6" />,
        close: <path d="m6 6 12 12M6 18 18 6" />,
        menu: <path d="M4 6h16M4 12h16M4 18h16" />,
        code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-16-2 20" />,
        compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-3 5-5 3 3-5 5-3Z" /></>,
        refresh: <path d="M20 7a9 9 0 1 0 1 9M20 3v5h-5" />,
        trophy: <path d="M7 3h10v6a5 5 0 0 1-10 0V3Zm5 11v7m-4 0h8M7 5H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4" />
    };
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.spark}</svg>;
}

function Logo() {
    return <a className="logo" href="#home" aria-label="SultiAI home"><img src="/images/sulti-icon.png" width="36" height="36" alt="" /><span>Sulti<span>AI</span></span></a>;
}

const navLinks = [['Features', 'features'], ['How It Works', 'how-it-works'], ['Modules', 'modules'], ['AI Technology', 'technology'], ['Community', 'community'], ['FAQ', 'faq']];
const modules = [
    ['chat', 'Daily Conversation', 'Find your voice in everyday moments.', '01'],
    ['mic', 'Pronunciation Lab', 'Hear it. Say it. Get it right.', '02'],
    ['book', 'Vocabulary Builder', 'Words that stay with you.', '03'],
    ['globe', 'Grammar Guide', 'Make sense of the little details.', '04'],
    ['people', 'Roleplay Scenarios', 'Real situations. A little less pressure.', '05'],
    ['compass', 'Cultural Discovery', 'The stories behind the language.', '06'],
    ['spark', 'AI Tutor', 'A patient partner, always ready.', '07'],
    ['refresh', 'Review Center', 'Turn a new phrase into second nature.', '08']
];
const dialects = {
    Cebuano: { region: 'Central Visayas', phrase: 'Maayong buntag!', pronunciation: 'ma-YA-yong bun-TAG', thanks: 'Salamat kaayo!', thanksPronunciation: 'sa-LA-mat ka-A-yo' },
    Hiligaynon: { region: 'Western Visayas', phrase: 'Maayo nga aga!', pronunciation: 'ma-A-yo nga A-ga', thanks: 'Salamat gid!', thanksPronunciation: 'sa-LA-mat geed' },
    Waray: { region: 'Eastern Visayas', phrase: 'Maupay nga aga!', pronunciation: 'ma-OO-pay nga A-ga', thanks: 'Salamat hin duro!', thanksPronunciation: 'sa-LA-mat hin DOO-ro' }
};
const faqs = [
    ['What is SultiAI?', 'SultiAI is a language companion designed around speaking Bisaya, with AI conversation practice, pronunciation feedback, lessons, and a native-speaker community. This website recreates the original product’s design; the conversation previews here are illustrative.'],
    ['Which languages can I learn?', 'Explore Cebuano (Bisaya), Hiligaynon (Ilonggo), and Waray-Waray. Each dialect has its own phrases, pronunciation guides, and cultural context.'],
    ['How do I install the app?', 'Visit the original SultiAI download page using the download button. If a release is available, download the Android APK and follow its installation instructions. Android 8.0 or later is required.'],
    ['How does pronunciation feedback work?', 'The original product describes acoustic analysis using mel-frequency cepstral coefficients (MFCC), pitch, and formants to compare your pronunciation with the target phrase. The score shown on this website is an example, not an analysis of your voice.'],
    ['Is there a developer API?', 'The original project includes pronunciation scoring, phoneme conversion, and Living Lexicon API tools. Follow the API link to the source documentation for setup and availability.']
];

function PhonePreview() {
    const [alternate, setAlternate] = useState(false);
    const wave = [12, 20, 30, 18, 38, 47, 27, 36, 22, 43, 52, 34, 18, 28, 39, 23, 14, 25, 17, 10];
    return <div className="showcase">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="floating-label voice-label"><span className="icon-chip"><Icon name="mic" size={17} /></span><div><strong>Find your voice</strong><small>Real-time conversation</small></div><span className="live-dot" /></div>
        <div className="phone"><div className="phone-screen">
            <div className="phone-status"><span>9:41</span><div className="phone-island" /><span className="status-symbols">▮▮▮ <span className="battery" /></span></div>
            <div className="app-top"><span><img src="/images/sulti-icon.png" width="22" height="22" alt="" /> Sulti<span className="mint">AI</span></span><span className="online"><i /> Online</span></div>
            <div className="tutor-orb"><div className="orb-inner"><Icon name="mic" size={35} /></div><Icon name="spark" size={14} className="orb-spark spark-one" /><Icon name="spark" size={8} className="orb-spark spark-two" /></div>
            <div className="tutor-title">Your Bisaya companion<span>Let’s make conversation.</span></div>
            <div className="conversation" aria-live="polite"><div className="bubble tutor"><span className="bubble-author">SULTI</span><strong>{alternate ? 'Unsa imong pangalan?' : 'Maayong buntag! Kumusta ka?'}</strong><small>{alternate ? 'What is your name?' : 'Good morning! How are you?'}</small></div><div className="bubble learner"><strong>{alternate ? 'Ako si Alex. Ikaw?' : 'Maayo ko, salamat!'}</strong><small>{alternate ? 'I’m Alex. And you?' : 'I’m good, thank you!'}</small><Icon name="check" size={12} /></div></div>
            <div className="voice-panel"><div><span><Icon name="mic" size={12} /> Voice active</span><small>Cebuano</small></div><div className="waveform" aria-hidden="true">{wave.map((height, index) => <i key={index} style={{ height, animationDelay: `${index * .08}s` }} />)}</div></div>
            <div className="phone-score"><span>97<span>%</span></span><div><strong>Great pronunciation!</strong><small>You’re sounding like a local.</small></div><Icon name="spark" size={18} /></div>
            <button className="phone-mic" onClick={() => setAlternate(!alternate)} aria-label="Switch example conversation"><Icon name="mic" size={19} /></button><p className="phone-caption">Tap to try another conversation</p><div className="home-indicator" />
        </div></div>
        <div className="floating-label accuracy-label"><span className="accuracy-icon"><Icon name="check" size={18} /></span><div><strong>97% pronunciation</strong><small>A little better, every day.</small></div></div>
        <span className="preview-note">ILLUSTRATIVE APP PREVIEW</span>
    </div>;
}

export default function Page() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dialect, setDialect] = useState('Cebuano');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [activeFaq, setActiveFaq] = useState(null);
    const currentDialect = dialects[dialect];

    return <div className="site-shell" id="home">
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header"><div className="nav-container"><Logo /><nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{navLinks.map(([label, target]) => <a key={target} href={`#${target}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a><a href="#api" onClick={() => setMenuOpen(false)}>API</a></nav><a className="button button-small" href="#download"><Icon name="download" size={15} /> Download APK</a><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button></div></header>
        <main id="main">
            <section className="hero container">
                <div className="hero-copy"><div className="eyebrow-pill"><span className="live-dot" /> AI-powered Bisaya language companion</div><h1>Master Bisaya<br />Through <span className="gradient-text">Real<br />Conversations.</span></h1><p className="hero-description">More than words. A real connection.<br />Practice Bisaya with an AI that listens, guides, and<br className="desktop-break" /> helps you speak with confidence.</p><div className="hero-actions"><a className="button" href="#download"><Icon name="download" size={18} /> Download SultiAI APK<Icon name="arrow" size={17} /></a><a className="button button-secondary" href="#modules">Explore Features<Icon name="arrow" size={16} /></a></div><p className="install-note"><Icon name="shield" size={14} /> Android 8.0+<span>·</span>Free installation<span>·</span>No account needed to start</p><div className="language-note"><span className="language-dots"><i>C</i><i>H</i><i>W</i></span><div>One companion. Three dialects.<span>Cebuano · Hiligaynon · Waray</span></div></div></div>
                <PhonePreview />
            </section>
            <section className="proof-strip" aria-label="Product highlights"><div className="container proof-grid">{[['8', 'Learning modules', 'book'], ['3', 'Visayan dialects', 'globe'], ['MFCC', 'Acoustic pronunciation scoring', 'mic'], ['0', 'Play Store steps', 'download']].map(([value, label, icon]) => <div className="proof" key={label}><Icon name={icon} size={20} /><div><strong>{value}</strong><span>{label}</span></div></div>)}</div></section>
            <section className="section container features-section" id="features"><div className="section-heading"><span className="eyebrow">NOT JUST A LANGUAGE. A CONNECTION.</span><h2>Less memorizing.<br /><span className="muted-title">More living the language.</span></h2><p>From your first “kumusta” to conversations that feel like home.<br />Meet a different way to learn Bisaya.</p></div><div className="feature-grid"><article className="feature-card feature-large"><span className="icon-chip"><Icon name="chat" size={23} /></span><h3>A conversation, not a quiz.</h3><p>Talk naturally with SULTI. Practice real situations, ask questions, and learn from gentle corrections in context.</p><div className="sample-chat"><div><span>SULTI</span>Unsa imong gusto kan-on?<small>What would you like to eat?</small></div><div>Gusto ko og puso!<small>I’d like some hanging rice!</small></div></div><a className="text-link" href="#how-it-works">Meet your AI companion<Icon name="arrow" size={16} /></a></article><article className="feature-card"><span className="icon-chip"><Icon name="mic" size={23} /></span><h3>Be heard. Get better.</h3><p>Pronunciation feedback that goes beyond right or wrong. Understand the sounds, stress, and rhythm of Bisaya.</p><div className="sound-letter-row">{'kumusta'.split('').map((letter, index) => <span key={index} className={index === 3 ? 'letter-adjust' : ''}>{letter}<Icon name={index === 3 ? 'arrow' : 'check'} size={9} /></span>)}</div><span className="mini-note">Every sound is a step forward.</span></article><article className="feature-card"><span className="icon-chip"><Icon name="globe" size={23} /></span><h3>Three dialects. One home.</h3><p>Discover Cebuano, Hiligaynon, and Waray. Learn the local phrases and cultural details that make each one special.</p><div className="dialect-chips"><span>Cebuano</span><span>Hiligaynon</span><span>Waray</span></div><span className="mini-note">Rooted in the heart of the Visayas.</span></article></div></section>
            <section className="section container how-section" id="how-it-works"><div className="section-heading centered"><span className="eyebrow">A LITTLE PRACTICE. EVERY DAY.</span><h2>Your next conversation starts here.</h2><p>No perfect pronunciation required. Just a little curiosity.</p></div><div className="steps-grid">{[['01', 'Start with a hello', 'Talk or type. SULTI meets you wherever you are in your learning journey.'], ['02', 'Learn in the moment', 'Get useful corrections and explanations as the conversation unfolds.'], ['03', 'Make it your own', 'Try a roleplay, practice a phrase, and bring your new words into everyday life.']].map(([number, title, text]) => <article className="step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
            <section className="section container" id="modules"><div className="section-heading heading-row"><div><span className="eyebrow">BUILT FOR YOUR EVERYDAY</span><h2>Eight ways to find your voice.</h2></div><p>A complete learning toolkit.<br />One thoughtful companion.</p></div><div className="module-grid">{modules.map(([icon, title, description, number]) => <a className="module-card" href="#download" key={title}><span className="module-number">{number}</span><Icon name={icon} size={25} /><h3>{title}</h3><p>{description}</p><Icon name="arrow" size={16} className="module-arrow" /></a>)}</div></section>
            <section className="section container dialect-section" id="technology"><div className="section-heading"><span className="eyebrow">LANGUAGE WITH LOCAL HEART</span><h2>Different words.<br /><span className="muted-title">The same warm welcome.</span></h2><p>Discover how three Visayan dialects say hello.<br />Try the interactive phrase preview.</p><div className="technology-note"><Icon name="mic" size={19} /><span>Powered by acoustic analysis<strong>MFCC · Pitch tracking · Formant detection</strong></span></div></div><div className="dialect-panel"><div className="dialect-tabs" aria-label="Choose a dialect">{Object.keys(dialects).map(name => <button key={name} aria-pressed={dialect === name} className={dialect === name ? 'active' : ''} onClick={() => { setDialect(name); setPhraseIndex(0); }}>{name}</button>)}</div><div className="phrase-display" aria-live="polite"><span className="region-label"><Icon name="globe" size={14} />{currentDialect.region}</span><h3>{phraseIndex ? currentDialect.thanks : currentDialect.phrase}</h3><p>{phraseIndex ? 'Thank you very much!' : 'Good morning!'}</p><span className="phonetic">{phraseIndex ? currentDialect.thanksPronunciation : currentDialect.pronunciation}</span><button className="button button-secondary" onClick={() => setPhraseIndex(phraseIndex ? 0 : 1)}>Try another phrase<Icon name="refresh" size={15} /></button></div><div className="phrase-footnote"><span className="live-dot" /> Real phrases. Local roots.</div></div></section>
            <section className="section container community-section" id="community"><div className="community-visual" aria-hidden="true"><div className="community-orbit" /><span className="community-word word-one">Kumusta!</span><span className="community-word word-two">Maayong adlaw</span><span className="community-word word-three">Salamat gid!</span><div className="community-center"><Icon name="people" size={48} /></div><span className="community-dot dot-one" /><span className="community-dot dot-two" /></div><div className="section-heading"><span className="eyebrow">KEPT ALIVE BY PEOPLE</span><h2>A living language.<br />A growing community.</h2><p>Learn with people who call Bisaya home. Share local knowledge, discover new expressions, and help keep a language alive.</p><div className="community-points"><span><Icon name="shield" />Native-speaker verification</span><span><Icon name="book" />A community-built Living Lexicon</span><span><Icon name="trophy" />XP, streaks, and shared progress</span></div></div></section>
            <section className="section container pricing-section" id="pricing"><div><span className="eyebrow">YOUR FIRST STEP IS FREE</span><h2>A little curiosity is all you need.</h2><p>Download and explore. Find current plans and availability on the original SultiAI website.</p></div><a href="https://sultiai.com/pricing" target="_blank" rel="noopener noreferrer" className="button button-secondary">Explore pricing<Icon name="arrow" size={17} /></a></section>
            <section className="section container faq-section" id="faq"><div className="section-heading"><span className="eyebrow">A FEW THINGS TO KNOW</span><h2>Good questions.<br /><span className="muted-title">Straight answers.</span></h2><p>Getting started should feel simple.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={`faq-item ${activeFaq === index ? 'expanded' : ''}`} key={question}><h3><button aria-expanded={activeFaq === index} aria-controls={`answer-${index}`} onClick={() => setActiveFaq(activeFaq === index ? null : index)}>{question}<span>{activeFaq === index ? '−' : '+'}</span></button></h3><div id={`answer-${index}`} hidden={activeFaq !== index}><p>{answer}</p></div></article>)}</div></section>
            <section className="container api-section" id="api"><span className="icon-chip"><Icon name="code" size={26} /></span><div><h3>Building something for Bisaya?</h3><p>Explore pronunciation tools, the Living Lexicon, and the developer API.</p></div><a className="text-link" href="https://github.com/Gen144-D/SultiAI" target="_blank" rel="noopener noreferrer">Explore the source<Icon name="arrow" size={17} /></a></section>
            <section className="container download-section" id="download"><div className="download-decoration" aria-hidden="true"><Icon name="chat" size={130} /></div><span className="eyebrow">YOUR VOICE BELONGS HERE</span><h2>Your first “kumusta”<br />is just the beginning.</h2><p>A new language. A new connection. A little more confidence.</p><a className="button" href="https://sultiai.com/download" target="_blank" rel="noopener noreferrer"><Icon name="download" size={18} />Get SultiAI for Android<Icon name="arrow" size={17} /></a><span className="download-note"><Icon name="shield" size={13} /> Android 8.0+ · Direct APK · Free installation</span><small className="download-disclaimer">Opens the original SultiAI download page. Release availability is managed by the original project.</small></section>
        </main>
        <footer className="site-footer container"><div className="footer-top"><div><Logo /><p>A little more Bisaya.<br />A little closer to home.</p></div><div className="footer-links"><a href="#features">Features</a><a href="#modules">Modules</a><a href="#faq">FAQ</a><a href="https://github.com/Gen144-D/SultiAI" target="_blank" rel="noopener noreferrer">GitHub<Icon name="arrow" size={13} /></a></div><div className="footer-signoff"><span className="live-dot" />Made for the voices of the Visayas.</div></div><div className="footer-bottom"><span>© 2026 SultiAI. A design recreation.</span><span>Speak naturally. Connect deeply.</span></div></footer>
    </div>;
}
