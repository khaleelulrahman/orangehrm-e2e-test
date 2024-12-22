import { APIRequestContext, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class PetShop{
    private baseUrl:string;
    private request: APIRequestContext;
    constructor(request:APIRequestContext){
        this.request=request;
        this.baseUrl="https://petstore.swagger.io/v2";
    }
    async createPet(){
      const id=faker.number.int();
      const name=faker.animal.cat();
      console.log(id,name)
        const response=await this.request.post(`${this.baseUrl}/pet`,{
            data:{
              "id": `${id}`,
              "category": {
                "id": `${id}`,
                "name": `${name}`
              },
              "name": `${name}`,
              "photoUrls": [
                "string"
              ],
              "tags": [
                {
                  "id": `${id}`,
                  "name": `${name}`
                }
              ],
              "status": "available"
            }
           });
           expect(response.status()).toBe(200);
           const res =await response.json();
           return res.id;
    }
    async getPet(id: number){
        const response=await this.request.get(`${this.baseUrl}/pet/${id}`);
            expect(response.status()).toBe(200);
           console.log(await response.json());

    }
    async updatePet(id: number){
      const name = faker.animal;
      const response=await this.request.post(`${this.baseUrl}/pet`,{
          data:{
            "id": `${id}`,
            "category": {
              "id": `${id}`,
              "name": `${name}`
            },
            "name": `${name}`,
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": `${id}`,
                "name": `${name}`
              }
            ],
            "status": "closed"
          },
          
         });
        
         expect(response.status()).toBe(200);
         const res =await response.json();
         console.log(res.name);
         console.log(res.id);
         console.log(res.status);
         return name;
  }
  async deletePet(id: number){
    const response = await this.request.delete(`${this.baseUrl}/pet/${id}`);
    expect(response.status()).toBe(200);
    console.log(response);
    
    console.log(response.json())}
  
  }
  

