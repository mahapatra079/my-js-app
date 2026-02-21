function SideNav() {
    const navItems = [
        { id: 'hoisting', label: 'Hoisting', active: true },
        { id: 'scope', label: 'Scope', active: false },
        { id: 'functions', label: 'Functions', active: false },
        { id: 'events', label: 'Events', active: false }
    ];

    return `
        <nav class="sidenav">
            <ul>
                ${navItems.map(item => `
                    <li>
                        <a href="#" data-section="${item.id}" ${item.active ? 'class="active"' : ''}>
                            ${item.label}
                        </a>
                    </li>
                `).join('')}
            </ul>
        </nav>
    `;
}

export default SideNav;