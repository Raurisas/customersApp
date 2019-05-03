import API from '../Api';

describe('API', () => {
  it('should encode parameter', () => {
    const correctParameter = 'key=someValue';
    expect(API.encode('key', 'someValue')).toEqual(correctParameter);
  });
  it('should normalize data', () => {
    const customer = {
      email: 'aurimas993@gmail.com',
      fullName: 'Aurimas',
      city: 'Vilnius',
      street: 'Ulvydo',
      houseNumber: '7',
      zipCode: '08250'
    };
    const correctData =
      'email=aurimas993%40gmail.com&metadata%5BfullName%5D=Aurimas&metadata%5Bcity%5D=Vilnius&metadata%5Bstreet%5D=Ulvydo&metadata%5BhouseNumber%5D=7&metadata%5BzipCode%5D=08250';
    expect(API.normalizeData(customer)).toEqual(correctData);
  });
});
