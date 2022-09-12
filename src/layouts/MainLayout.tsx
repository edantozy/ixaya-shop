import { Box, Container } from '@mui/material'
import { FC } from 'react'

interface Props {
  children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      {children}
      <Box height={30} />
    </Container>
  )
}
