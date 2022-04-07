import { ObjectId } from 'bson'
import { v4 } from `uuid`
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main(){
        //const id = new ObjectId()
        const name = v4();
        const user = await prisma.user.create({
                data: {
                        name: name
                }
        });
        console.log(user);

        const user_get = await prisma.user.findMany({
                where: {name: name}
        });
        console.log(user_get);
}

main()
