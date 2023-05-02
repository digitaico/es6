// Deep First Search algo
// https://www.toptal.com/javascript/interview-questions#question-528
// visit all elements in a DOM tree
const Traverse = (p_element, p_callback) => {
  p_callback(p_element);
  let list = p_element.children;
  for (var i = 0; i < list.length; i++) {
    Traverse(list[i], p_callback);
  }
};
