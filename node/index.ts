import {
  Service,
  IOClients,
  ParamsContext,
  ServiceContext,
  RecorderState,
} from '@vtex/api'
import { getLiveUsers } from './routes/getLiveUsers'

declare global {
  type Context = ServiceContext<IOClients, State>

  interface State extends RecorderState {
    code: number
  }
}

export default new Service<IOClients, State, ParamsContext>({
  routes: {
    getProducts: (ctx: any) => {
      getLiveUsers(ctx)
      ctx.body = 'retrieved live products'
      ctx.status = 200
    },
  },
})
