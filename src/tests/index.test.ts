import {describe , it , expect , vi} from 'vitest'
import  request  from "supertest"
import {app} from '../index'
//import { prismaClient } from '../db'

//use this method to mock selected objects

// vi.mock('../db', ()=>({
//     prismaClient:{sum :{create:vi.fn()}} 
// }))

// deep mocking

vi.mock('../db')

describe("POST /sum", ()=>{
    it("should return sum of two numbers",async ()=>{
        const res = await request(app).post("/sum").send({
            a:1,
            b:2
        })
        expect (res.statusCode).toBe(200);
        expect (res.body.answer).toBe(3);
    })
})