// Calculator Section component for Balatro Calculator
function createCalculatorSection() {
  return `
    <section id="calculator" class="calculator-section">
      <div class="calculator-intro">
        <h2>Calculate the Score of Any Balatro Hand</h2>
        <p>Use our calculator to simulate various game scenarios and find the best strategy</p>
      </div>
      <div class="calculator-frame">
        <iframe src="balatro-calculator.html" title="Balatro Calculator" id="calculator-iframe"></iframe>
      </div>
      <div class="calculator-cta">
        <a href="balatro-calculator.html" class="cta-button" target="_blank">Use Full Calculator</a>
      </div>
    </section>
  `;
}
