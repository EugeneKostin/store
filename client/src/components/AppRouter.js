import { Routes, Route } from 'react-router-dom'
import { Catalog, Create, Success } from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/create" element={<Create />} />
      <Route path="/create/success" element={<Success />} />
    </Routes>
  )
}