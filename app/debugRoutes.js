/* istanbul ignore next */
const debugRoutes = (routes) => {
  routes.forEach((route) => {
    const internalRoute = route;
    const onEnter = route.onEnter;
    internalRoute.onEnter = (_nextState, _replace) => {
      console.debug(`route.onEnter(name: ${internalRoute.name}, path: ${_nextState.location.pathname}, nextState: `, _nextState);
      if (onEnter) {
        onEnter(_nextState, _replace);
      }
    };
    debugRoutes(internalRoute.childRoutes || []);
  });
};

export default debugRoutes;
