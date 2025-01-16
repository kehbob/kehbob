<template>
  <div id="main" class="scroll-container">
    <!-- <router-link to="/">홈으로</router-link> -->
    <!-- nav 영역 -->
    <section class="nav-section scroll-area">
      <Nav @listCick="customClick"></Nav>
    </section>

    <!-- home 영역 -->
    <section class="home-section scroll-area" ref="a">
      <Home></Home>
    </section>

    <!-- profile 영역 -->
    <section class="profile-section scroll-area" ref="b">
      <profile></profile>
    </section>

    <!-- skill 영역 -->
    <section class="skill-section scroll-area" ref="c" >
      <Skill></Skill>
    </section>

    <!-- project 영역 -->
    <section class="project-section scroll-area" ref="d">
      <Project></Project>
    </section>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Home from '@/components/Home.vue'
import Profile from '@/components/Profile.vue'
import Skill from '@/components/Skill.vue'
import Project from '@/components/Project.vue'

export default {
  components : {
    Nav,
    Home,
    Profile,
    Skill,
    Project,
  },
  methods: {
    customClick(e) {
      console.log("target  :: ", e.target.innerText);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      this.$refs[e.target.innerText].scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style>
  #main {
    height: 100%;
  }
</style>