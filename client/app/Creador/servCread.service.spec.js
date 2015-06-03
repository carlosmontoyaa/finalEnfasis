'use strict';

describe('Service: servCread', function () {

  // load the service's module
  beforeEach(module('parcialApp'));

  // instantiate service
  var servCread;
  beforeEach(inject(function (_servCread_) {
    servCread = _servCread_;
  }));

  it('should do something', function () {
    expect(!!servCread).toBe(true);
  });

});
