// Features Section component for Balatro Calculator
function createFeaturesSection() {
  return `
    <section id="features" class="features-section">
      <h2>Why Choose Our Balatro Calculator</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <img src="assets/icons/precision.svg" alt="Precision icon">
          </div>
          <h3>Precise Calculations</h3>
          <p>Accurately simulates in-game mechanics for exact score calculations</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <img src="assets/icons/joker.svg" alt="Joker optimization icon">
          </div>
          <h3>Joker Optimization</h3>
          <p>Automatically finds the best joker combinations to maximize your score</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <img src="assets/icons/hand.svg" alt="Hand optimization icon">
          </div>
          <h3>Hand Optimization</h3>
          <p>Analyzes the best way to play your hand for maximum game benefits</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <img src="assets/icons/deck.svg" alt="Special decks icon">
          </div>
          <h3>All Special Decks</h3>
          <p>Supports all special decks in the game, including Plasma Deck and The Flint</p>
        </div>
      </div>
      <div class="features-guide" id="guide">
        <h3>How To Use Balatro Calculator</h3>
        <ol>
          <li>Add your Joker cards</li>
          <li>Set up your hand</li>
          <li>Apply special effects and modifiers</li>
          <li>View calculated results and recommendations</li>
        </ol>
      </div>
    </section>
  `;
}
