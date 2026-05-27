import { useState } from 'react';

const menuCategories = [
  {
    id: 'starters',
    title: 'Starters',
    items: [
      { name: 'Bruschetta', description: 'Toasted baguette with tomatoes, basil, and balsamic glaze.', price: '$10' },
      { name: 'Crispy Calamari', description: 'Lightly fried calamari with lemon aioli.', price: '$13' },
      { name: 'Roasted Beet Salad', description: 'Arugula, goat cheese, and citrus vinaigrette.', price: '$11' }
    ]
  },
  {
    id: 'mains',
    title: 'Mains',
    items: [
      { name: 'Grilled Salmon', description: 'Pan-seared salmon with herb butter and seasonal vegetables.', price: '$24' },
      { name: 'Truffle Mushroom Pasta', description: 'Creamy pasta with wild mushrooms and parmesan.', price: '$21' },
      { name: 'Ribeye Steak', description: '12oz steak with roasted potatoes and chimichurri.', price: '$28' }
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { name: 'Chocolate Fondant', description: 'Molten center cake with vanilla gelato.', price: '$9' },
      { name: 'Pistachio Panna Cotta', description: 'Silky cream dessert with berry compote.', price: '$8' },
      { name: 'Lemon Tart', description: 'Zesty lemon curd with crisp pastry.', price: '$8' }
    ]
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">Flavor Haven</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Fine dining & modern comfort</p>
            <h1>Memorable meals crafted for every moment.</h1>
            <p>Enjoy chef-driven dishes made from seasonal ingredients, served in a warm and welcoming environment.</p>
            <div className="hero-actions">
              <a className="button primary" href="#menu">View Menu</a>
              <a className="button secondary" href="#contact">Reserve a Table</a>
            </div>
          </div>
          <div className="hero-image" aria-hidden="true"></div>
        </section>

        <section className="menu-section" id="menu">
          <div className="section-heading">
            <p className="eyebrow">Our menu</p>
            <h2>Delicious dishes for every appetite.</h2>
          </div>
          <div className="category-tabs">
            {menuCategories.map(category => (
              <button
                key={category.id}
                className={activeCategory === category.id ? 'tab active' : 'tab'}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>
          <div className="menu-grid">
            {menuCategories.find(cat => cat.id === activeCategory).items.map(item => (
              <article key={item.name} className="menu-card">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="price">{item.price}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">About us</p>
            <h2>Where every meal feels like an occasion.</h2>
            <p>
              Flavor Haven blends local ingredients with culinary creativity to bring you an unforgettable dining experience.
              From handcrafted cocktails to seasonal entrées, every detail is designed with care.
            </p>
            <div className="feature-list">
              <div>
                <strong>Seasonal ingredients</strong>
                <p>Fresh flavors sourced from local farms and trusted producers.</p>
              </div>
              <div>
                <strong>Chef-crafted plates</strong>
                <p>Thoughtful dishes made to delight every palate.</p>
              </div>
              <div>
                <strong>Cozy atmosphere</strong>
                <p>An inviting dining room ideal for date nights, celebrations, and family meals.</p>
              </div>
            </div>
          </div>
          <div className="about-image" aria-hidden="true"></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Book your table or ask about our menu.</h2>
          </div>
          <div className="contact-grid">
            <form className="contact-form">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea rows="5" placeholder="How can we help?"></textarea>
              </label>
              <button type="submit" className="button primary">Send Message</button>
            </form>
            <div className="contact-info">
              <div>
                <strong>Location</strong>
                <p>123 Culinary Lane, Flavor City</p>
              </div>
              <div>
                <strong>Hours</strong>
                <p>Mon-Sun: 11am – 10pm</p>
              </div>
              <div>
                <strong>Phone</strong>
                <p>(555) 012-3456</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Flavor Haven. Crafted with care for every guest.</p>
      </footer>
    </div>
  );
}

export default App;
