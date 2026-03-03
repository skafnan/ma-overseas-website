// 45. How does this keyword behave differently in arrow functions compared
// to normal functions?

// In normal functions, this depends on how the function is called (the calling object decides this).

// In arrow functions, this is lexically bound — it takes this from its surrounding scope and cannot be changed.