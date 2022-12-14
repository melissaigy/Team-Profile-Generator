const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Melissa', 7, 'melissaigy@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Melissa', 7, 'melissaigy@gmail');

    expect(manager.getRole()).toEqual("Manager");
}); 