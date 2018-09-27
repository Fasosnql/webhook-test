describe('sort multiple filter', function() {
  let sortMultipleFilter;
  const array = [{
    fieldOne: 'A',
    fieldTwo: 1
  }, {
    fieldOne: 'A',
    fieldTwo: 2
  }, {
    fieldOne: 'B',
    fieldTwo: 3
  }, {
    fieldOne: 'B',
    fieldTwo: 4
  }];
  const sortedArrays = {
    ASC_ASC: [{
      fieldOne: 'A',
      fieldTwo: 1
    }, {
      fieldOne: 'A',
      fieldTwo: 2
    }, {
      fieldOne: 'B',
      fieldTwo: 3
    }, {
      fieldOne: 'B',
      fieldTwo: 4
    }],
    ASC_DESC: [{
      fieldOne: 'A',
      fieldTwo: 4
    }, {
      fieldOne: 'A',
      fieldTwo: 3
    }, {
      fieldOne: 'B',
      fieldTwo: 2
    }, {
      fieldOne: 'B',
      fieldTwo: 1
    }],
    DESC_ASC: [{
      fieldOne: 'B',
      fieldTwo: 1
    }, {
      fieldOne: 'B',
      fieldTwo: 2
    }, {
      fieldOne: 'A',
      fieldTwo: 3
    }, {
      fieldOne: 'A',
      fieldTwo: 4
    }],
    DESC_DESC: [{
      fieldOne: 'B',
      fieldTwo: 4
    }, {
      fieldOne: 'B',
      fieldTwo: 3
    }, {
      fieldOne: 'A',
      fieldTwo: 2
    }, {
      fieldOne: 'A',
      fieldTwo: 1
    }]
  };
  const sortParams = {
    ASC_ASC: {
      fieldOne: 'ASC',
      fieldTwo: 'ASC'
    },
    ASC_DESC: {
      fieldOne: 'ASC',
      fieldTwo: 'DESC'
    },
    DESC_ASC: {
      fieldOne: 'DESC',
      fieldTwo: 'ASC'
    },
    DESC_DESC: {
      fieldOne: 'DESC',
      fieldTwo: 'DESC'
    }
  };

  beforeEach(angular.mock.module('filters.sortMultipleFilter'));

  beforeEach(inject(function(_sortMultipleFilter_) {
    sortMultipleFilter = _sortMultipleFilter_;
  }));

  it('should sort array if passing columns that exist', function() {
    expect(sortMultipleFilter(array, sortParams.ASC_ASC)).toEqual(sortedArrays.ASC_ASC);
    expect(sortMultipleFilter(array, sortParams.DESC_DESC)).toEqual(sortedArrays.DESC_DESC);
  });

  it('should not sort array if passing columns that not exist', function() {
    expect(sortMultipleFilter(array, sortParams.ASC_ASC)).toEqual(array);
  });
});
