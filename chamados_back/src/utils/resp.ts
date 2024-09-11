const resp = (s: number, m: unknown) => ({status: s, message: m})
const respE = (s:string) => ({error: s})


export {resp, respE}