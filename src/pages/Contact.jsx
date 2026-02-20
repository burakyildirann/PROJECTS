import React from 'react'
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Paper, 
  Grid 
} from '@mui/material'

function Contact() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      
      <Paper elevation={4} sx={{ p: 5, borderRadius: 3 }}>
        
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: "bold" }}
        >
          İletişim Formu
        </Typography>

        <Typography 
          variant="body1" 
          align="center" 
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Bizimle iletişime geçmek için aşağıdaki formu doldurun.
        </Typography>

        <Box component="form">
          <Grid container spacing={3}>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Ad"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Soyad"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mesajınız"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#05c31e",
                  "&:hover": {
                    backgroundColor: "#049e18"
                  }
                }}
              >
                Gönder
              </Button>
            </Grid>

          </Grid>
        </Box>

      </Paper>

    </Container>
  )
}

export default Contact