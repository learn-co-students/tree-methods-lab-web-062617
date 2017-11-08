// First Solution
// function inOrder(node) {
//   if (node.left === null && node.right === null) {
//     console.log(node.data);
//   } else if (node.left === null && node.right) {
//     console.log(node.data);
//     inOrder(node.right)
//   } else if (node.left && node.right == null) {
//     inOrder(node.left)
//     console.log(node.data);
//   } else {
//     inOrder(node.left)
//     console.log(node.data);
//     inOrder(node.right)
//   }
// }

function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

// first check and see if newNode === rootNode
// then check if newNode is < || > rootNode
// if child === newNode return true
// if child empty set newNode = childNode
// else call findOrAdd with childNode and newNode
function findOrAdd(rootNode, newNode) {
  if (newNode.data === rootNode.data || newNode.data === rootNode.left || newNode.data === rootNode.right) {
    return true
  } else if (newNode.data < rootNode.data) {
      return !rootNode.left ? rootNode.left = newNode : findOrAdd(rootNode.left, newNode)
  } else if (newNode.data > rootNode.data) {
      return !rootNode.right ? rootNode.right = newNode : findOrAdd(rootNode.right, newNode)
  }
}

function max(node) {
  return node.right ? max(node.right) : node
}

function min(node) {
  return node.left ? max(node.left) : node
}
