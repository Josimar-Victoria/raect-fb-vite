import { useEffect, useState } from 'react'
import Buttom from '../components/Buttom'
import ButtonLoading from '../components/ButtonLoading'
import Title from '../components/Title'
import { useFirestore } from '../hooks/useFirestore'

const Home = () => {
  const {
    data,
    loading,
    error,
    getData,
    addData,
    updateDocData,
    deleteDocData
  } = useFirestore()
  const [url, SetUrl] = useState('')
  const [newOriginID, setNewOriginID] = useState()

  useEffect(() => {
    getData()
  }, [])

  if (loading.getData) return <p>Loading getData...</p>
  if (error) return <p>Error: {error}</p>

  const handleSubmit = async e => {
    e.preventDefault()
    if (newOriginID) {
      await updateDocData(newOriginID, url)
      setNewOriginID('')
      SetUrl('')
      return
    }
    await addData(url)
    SetUrl('')
  }

  const handleClickDelete = async nanoid => {
    await deleteDocData(nanoid)
  }

  const handleClickEdit = async item => {
    console.log('edict')
    SetUrl(item.origin)
    setNewOriginID(item.nanoid)
  }

  console.log(data, 'data')
  return (
    <>
      <Title text='Home' />

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='url'
          placeholder='Ingresa url'
          value={url}
          onChange={e => SetUrl(e.target.value)}
        />
        {newOriginID ? (
          <Buttom
            text='Actualizar'
            type='submit'
            loading={loading.updateDocData}
          />
        ) : (
          <Buttom text='Agregar URL' type='submit' loading={loading.addData} />
        )}
      </form>
      {data.map(item => (
        <div key={item.nanoid}>
          <p>{item.origin}</p>
          <p>{item.nanoid}</p>
          <p>{item.uid}</p>
          <Buttom
            text='Eliminar'
            type='button'
            color='red'
            loading={loading[item.nanoid]}
            onClick={() => handleClickDelete(item.nanoid)}
          />
          <Buttom
            text='Editar'
            type='button'
            color='blue'
            onClick={() => handleClickEdit(item)}
          />
        </div>
      ))}
    </>
  )
}

export default Home
