import type { Pet } from './api'
import { getPetById } from './api'

// This is just here to check that the typecheck is set up correctly
const typeCheckTest: string = 42

async function test(): Promise<Pet | undefined> {
  return await getPetById({ path: { petId: 123 } })
}
