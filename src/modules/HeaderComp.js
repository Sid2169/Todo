const HeaderComp = document.createElement('div');
HeaderComp.innerHTML = `
    <header class="header">
        <button class="sidebar-toggle" aria-label="Toggle Sidebar">☰</button>
        <h1 class="title">My Todo List</h1>
        <button class="theme-toggle" aria-label="Toggle Theme">🌙</button>
    </header>
`;
export { HeaderComp };