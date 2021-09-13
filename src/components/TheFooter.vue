<template>
  <footer class="footer">
    <div class="container footer__layout">
      <address class="footer__address">
        <a class="footer__phone" href="tel:+74955555555">+7 (495) 555-55-55</a
        ><br />
        Москва, Красная площадь, 52
      </address>
      <p class="footer__copy">© Эпоха возрождения, 2021</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  padding: 5rem 0;
  background-image: url("~@/assets/images/footer.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
@media screen and (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi) {
  .footer {
    background-image: url("~@/assets/images/footer@2x.jpg");
  }
}
.footer__layout {
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
.footer__address {
  margin-bottom: 2rem;
  font-style: normal;
}
.footer__phone {
  text-decoration: none;
  color: inherit;
}
.footer__copy {
  color: var(--text-secondary);
}

@media screen and (min-width: 550px) {
  .footer__layout {
    display: flex;
    text-align: left;
  }
  .footer__address {
    margin-bottom: 0;
  }
}
</style>
