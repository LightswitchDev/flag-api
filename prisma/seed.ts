import { Photon, SwitchType } from '@prisma/photon'
const photon = new Photon();

async function main() {

  const org1 = await photon.organizations.create({
    data: {
      name: 'Test Company1',
    }
  });

  const org2 = await photon.organizations.create({
    data: {
      name: 'Test Company2',
    }
  });

  const env1 = await photon.environments.create({
    data: {
      name: 'dev',
      organization: {
        connect: {
          id: org1.id
        }
      }
    }
  });

  const env2 = await photon.environments.create({
    data: {
      name: 'staging',
      organization: {
        connect: {
          id: org1.id
        }
      }
    }
  });

  const switch1 = await photon.switches.create({
    data: {
      name: 'test1',
      organization: {
        connect: {
          id: org1.id
        }
      },
      type: SwitchType.Boolean,
      environments: {


        connect: {
          id: env1.id
        }


      }
    },
  })

  console.log({ org1, org2, env1, switch1 })
}

main()
  .catch(e => console.error(e))
  .then(async () => {
    await photon.disconnect()
  })
