function mu(O, N, P) {
  return (O + 4 * N + P) / 6;
}

function sigma(O, N, P) {
  return (P - O) / 6;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { mu, sigma };
} else {
  window.mu = mu;
  window.sigma = sigma;
}
