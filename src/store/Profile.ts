import store from '@/store'
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators'

type TProfile = {
  name: string
}

@Module({ dynamic: true, namespaced: true, name: 'profile', store })
class Mod extends VuexModule {
  name = ''

  @Mutation
  setState(data: TProfile): void {
    Object.assign(this, data)
  }

  @Action({ commit: 'setState' })
  getProfile(): TProfile {
    return { name: 'updateName' }
  }
}

export default getModule(Mod)
