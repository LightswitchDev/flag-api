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
      key: 'test1',
      organization: {
        connect: {
          id: org1.id
        }
      },
      type: SwitchType.Multi,
      environments: {
        connect: {
          id: env1.id
        }
      }
    }
  });

  const v1 = await photon.variants.create({
    data: {
      value: "test1"
    }
  });

  const v2 = await photon.variants.create({
    data: {
      value: "test2"
    }
  });

  const v3 = await photon.variants.create({
    data: {
      value: "test3",
    }
  });

  await photon.switches.update({
    data: {
      variants: {
        connect: [
          { id: v1.id, },
          { id: v2.id, },
          { id: v3.id, }
        ]
      },
      defaultVariant: {
        connect: {
          id: v2.id,

        }
      }
    },
    where: {
      id: switch1.id,
    }
  })


  const switch2 = await photon.switches.create({
    data: {
      name: 'test2',
      key: 'test2',
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
    }
  });

  const v4 = await photon.variants.create({
    data: {
      value: "true"
    }
  });

  const v5 = await photon.variants.create({
    data: {
      value: "false"
    }
  });

  await photon.switches.update({
    data: {
      variants: {
        connect: [
          { id: v4.id, },
          { id: v5.id, },
        ]
      },
      defaultVariant: {
        connect: {
          id: v4.id,

        }
      }
    },
    where: {
      id: switch2.id,
    }
  })

  console.log({ org1, org2, env1, switch1, switch2 });

}

main()
  .catch(e => console.error(e))
  .then(async () => {
    await photon.disconnect()
  });
