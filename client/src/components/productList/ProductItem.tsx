import React, { useState } from 'react'
import { Pencil1Icon } from '@radix-ui/react-icons'
import type { Product } from '../../types/product'
import { EditProduct } from '../editProduct/EditProduct'
import { Headline } from '../ui/Headline'
import { ItemList } from '../ui/ItemList'
import { EditTrigger } from './EditTrigger'

type Props = Product & {
  onEdit: () => void
  hasSeparator?: boolean
}

export const ProductItem = ({
  id,
  name,
  brand,
  type,
  sizes,
  features,
  onEdit
}: Props) => {
  return (
    <div className="group relative z-0 -mx-6 p-6 first-of-type:-mt-6 first-of-type:rounded-t-3xl last-of-type:-mb-6 last-of-type:rounded-b-3xl from-2nd:border-t from-2nd:border-t-gray-100">
      <header className="mb-2.5">
        <ItemList
          presentation="pipe"
          items={[type, <strong key={brand}>{brand}</strong>]}
          className="mb-0.5"
        />
        <Headline level={2}>{name}</Headline>
      </header>
      <section className="flex flex-col gap-0.5">
        {sizes ? (
          <ItemList label="Available sizes:" presentation="tag" items={sizes} />
        ) : null}

        {features ? (
          <ItemList label="Features:" presentation="dot" items={features} />
        ) : null}
      </section>
      <EditProduct
        id={id}
        type={type}
        name={name}
        brand={brand}
        sizes={sizes}
        features={features}
        onAdd={onEdit}
      />
    </div>
  )
}
