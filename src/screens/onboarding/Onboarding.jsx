import { FlatList } from 'react-native'
import React from 'react'
import Slides from '../../components/Onboard/Slides'

const Onboarding = () => {
  const slides = [
    {
      id: 1,
      image:
        require('../../../assets/images/1.png'),
      // require('../../../assets/images/1.png'),
      // require('../../../assets/images/1.png')

      title: "REINA ALTA! AMPLIA Y ACOGEDORA CASA EN CONDOMINIO.",
      descripcion: "Esta es una breve descripcion sobre la propiedad publicado, contiene caracteristicas principales",
      tipo: "Casa",
      gc: "$40000",
      estado: "Disponible",
      m2: "100",
      valor: "$600.000",
      habitaciones: "5",
      baños: "3",

    },
    {
      id: 2,
      image:
        require('../../../assets/images/2.png'),
      // require('../../../assets/images/2.png'),
      // require('../../../assets/images/2.png')

      title: "REINA ALTA!.",
      descripcion: "Esta es una breve descripcion sobre la propiedad publicado, contiene caracteristicas principales"

    },
    {
      id: 3,
      image:
        require('../../../assets/images/3.png'),
      // require('../../../assets/images/3.png'),
      // require('../../../assets/images/3.png')

      title: "REINA ALTA! AMPLIA.",
      descripcion: "Esta es una breve descripcion sobre la propiedad publicado, contiene caracteristicas principales"

    }

  ]

  return (
    <FlatList
      pagingEnabled={false}
      showsHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Slides item={item} />}

    />

  )
}

export default Onboarding