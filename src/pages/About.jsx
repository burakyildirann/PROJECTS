import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SecurityIcon from "@mui/icons-material/Security";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function About() {
  return (
    <Box>

      {/* HERO SECTION */}
      <Box
        sx={{
          background: "linear-gradient(to right, #05c31e, #0f8f25)",
          color: "white",
          py: 8,
          textAlign: "center"
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Hakkımızda
          </Typography>
          <Typography variant="h6">
            Modern e-ticaret çözümleri ile güvenli ve hızlı alışveriş deneyimi.
          </Typography>
        </Container>
      </Box>

      {/* CONTENT SECTION */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Biz Kimiz?
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          Burak A.Ş olarak müşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunmayı hedefliyoruz.
          Teknoloji ve tasarımı bir araya getirerek kullanıcı dostu bir alışveriş deneyimi sağlıyoruz.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* FEATURES */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <Avatar
                sx={{
                  bgcolor: "#05c31e",
                  width: 60,
                  height: 60,
                  margin: "0 auto",
                  mb: 2
                }}
              >
                <ShoppingCartIcon />
              </Avatar>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Kolay Alışveriş
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Basit ve kullanıcı dostu arayüz ile hızlı sipariş imkanı.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <Avatar
                sx={{
                  bgcolor: "#05c31e",
                  width: 60,
                  height: 60,
                  margin: "0 auto",
                  mb: 2
                }}
              >
                <SecurityIcon />
              </Avatar>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Güvenli Ödeme
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  SSL güvenlik sistemi ile korunan ödeme altyapısı.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <Avatar
                sx={{
                  bgcolor: "#05c31e",
                  width: 60,
                  height: 60,
                  margin: "0 auto",
                  mb: 2
                }}
              >
                <LocalShippingIcon />
              </Avatar>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Hızlı Teslimat
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Siparişleriniz en kısa sürede kapınıza teslim edilir.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;