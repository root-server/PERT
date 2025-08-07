function mu(O, N, P) {
  return (O + 4 * N + P) / 6;
}

function sigma(O, N, P) {
  return (P - O) / 6;
}

module.exports = { mu, sigma };
