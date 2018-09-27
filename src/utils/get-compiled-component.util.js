export default ($compile, scope, component) => {
  const element = angular.element(component);

  $compile(element)(scope);
  scope.$digest();

  return element;
};