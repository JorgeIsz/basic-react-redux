const autor = "Jorge Isaza"
const contributors = ["Pedro Sanpedrin","James Rodriguez", "Jorge Isaza"] 
const numberOfContributors = contributors.length


describe("Testing basic things", () => {

  test("Autor must be 'Jorge Isaza'",() => {
    expect(autor).toBe("Jorge Isaza")
  })

  test("Contributors must contain 'Jorge Isaza'",() => {
    expect(autor).toContain("Jorge Isaza")
  })

  test("Number of contributors must be less than 4",() => {
    expect(numberOfContributors).toBeLessThan(4)
  })

  const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
  }

  const reverseStringPromise = str => {
    return new Promise((resolve, reject) => {
      if(!str)
        reject(Error("Falta parametro 'str'"))
      resolve(str.split("").reverse().join(""))
    })
  }

  test('Probar un callback', ()=>{
    reverseString('jorge', (str)=>{
      expect(str).toBe('egroj')
    })
  })

  test('Probar una promesa', () => {
    reverseStringPromise('hello')
      .then(str => {
        expect(str).toBe("olleh")
      })
  })
})

describe("Probando cosas relacionadas con el autor", () => {
  test("Probar el tipo del autor", () => {
    expect(typeof autor).toBe("string")
  })
  test("Probar la cantidad de palabras en el nombre del autor", () => {
    expect(autor.split(" ").length).toBe(2)
  })
})
