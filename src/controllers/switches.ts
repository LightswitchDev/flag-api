import { Photon } from '@prisma/photon'
import * as auth from 'basic-auth'
import { Handler } from 'express'
const photon = new Photon()

const getSwitchesWithAuthHeader: Handler = async (req, res) => {
  try {
    const { name: clientId, pass: apiKey } = auth(req) ?? {}
    if (!clientId || !apiKey) return res.sendStatus(403)

    const keys = await photon.keys.findMany({
      where: { organization: { id: clientId } },
    })
    if (!keys) return res.sendStatus(403)
    const hasValidKey = keys.some(key => key.id === apiKey)
    if (!hasValidKey) return res.sendStatus(403)

    const lightswitches = await photon.switches.findMany({
      where: { organization: { id: clientId } },
    })
    return res.json({ lightswitches })
  } catch (e) {
    console.error(e)
    return res.sendStatus(500)
  }
}

export default getSwitchesWithAuthHeader
