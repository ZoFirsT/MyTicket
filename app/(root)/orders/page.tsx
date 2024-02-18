import Search  from '@/components/shared/Search'
import { getOrdersByEvent } from '@/lib/actions/order.actions'
import { formatDateTime, formatPrice } from '@/lib/utils'
import { SearchParamProps } from '@/types'
import { IOrderItem } from '@/lib/database/models/order.model'

const Orders = async ({ searchParams }: SearchParamProps) => {
  const eventId = (searchParams?.eventId as string) || ''
  const searchText = (searchParams?.query as string) || ''

  const orders = await getOrdersByEvent({ eventId, searchString: searchText })

  return (
    <>
      <section className=" bg-purple-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 rounded-2xl">
        <h3 className="wrapper h3-bold text-center sm:text-left ">Orders</h3>
      </section>

      <section className="wrapper mt-8">
        <Search placeholder="Search buyer name..." />
      </section>

      <section className="wrapper overflow-x-auto bg-black/20 rounded-2xl p-4">
        <table className="w-full border-collapse border-t">
          <thead>
            <tr className="p-medium-14 border-b text-white">
              <th className="min-w-[250px] py-3 text-left ">Order ID</th>
              <th className="min-w-[200px] flex-1 py-3 pr-4 text-left">Event Title</th>
              <th className="min-w-[150px] py-3 text-left">Buyer</th>
              <th className="min-w-[100px] py-3 text-left">Created</th>
              <th className="min-w-[100px] py-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.length === 0 ? (
              <tr className="border-b">
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  No orders found.
                </td>
              </tr>
            ) : (
              <>
                {orders &&
                  orders.map((row: IOrderItem) => (
                    <tr
                      key={row._id}
                      className="p-regular-14 lg:p-regular-16 border-b "
                      style={{ boxSizing: 'border-box' }}>
                      <td className="min-w-[250px] py-4 text-primary-500">{row._id}</td>
                      <td className="min-w-[200px] flex-1 py-4 text-white pr-4">{row.eventTitle}</td>
                      <td className="min-w-[150px] py-4 text-white">{row.buyer}</td>
                      <td className="min-w-[100px] py-4 text-white">
                        {formatDateTime(row.createdAt).dateTime}
                      </td>
                      <td className="min-w-[100px] py-4 text-right text-white">
                        {formatPrice(row.totalAmount)}
                      </td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Orders
