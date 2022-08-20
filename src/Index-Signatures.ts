
//async promise function
async function getBudgetAsync(): Promise<any> {
  return new Promise((resolve, _) => {
    resolve({
      'shopping': 150,
      'food': 210,
      'utlities': 100
    })
  })
}


// Write an interface here
interface Budget {
  //key is string: number is value
  [category: string]: number
}

async function getBudget() {
  //Apply the Budget interface to the result
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();