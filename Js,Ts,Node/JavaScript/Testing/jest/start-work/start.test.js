const sum = require("./start");

test("Проверка суммы", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 2)).toBe(4);
});

test("Проверка присваивания объекта", () => {
    const data = { name: "John" };
    data.age = 22;
    expect(data).toEqual({ name: "John", age: 22 });
});

test("Проверка отрицания 'not'", () => {
    expect(1 + 1).not.toBe(0);
});

test("Проверка на null", () => {
    expect(null).toBeNull();
})