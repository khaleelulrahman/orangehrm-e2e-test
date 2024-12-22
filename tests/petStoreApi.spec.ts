import { test } from '@playwright/test';
import{ PetShop } from '../petStoreApi/petStore';

test('API', async ({ request }) => {
    const petShop =new PetShop(request);
    const id=await petShop.createPet();
    await petShop.getPet(id);
    const name=await petShop.updatePet(id);
    console.log(name);
    await petShop.deletePet(id);
    
   });