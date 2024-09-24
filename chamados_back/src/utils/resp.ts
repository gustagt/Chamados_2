const resp = (s: number, m: unknown) => ({status: s, data: m})
const respE = (s:string) => ({error: s})



export {resp, respE}