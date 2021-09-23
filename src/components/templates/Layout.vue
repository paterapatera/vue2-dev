<template>
  <div class="wrapper">
    <Header>aaaa</Header>
    <SideBar>
      <Profile />
      <SideMenu>
        <MenuItem class="active" icon="fa fa-link" router="/aa">Link0</MenuItem>
        <MenuItem icon="fa fa-link" router="/">Link</MenuItem>
        <MenuItem icon="fa fa-link" router="/">Another Link</MenuItem>
        <SubMenuItem icon="fa fa-link" router="/">Link in level 2</SubMenuItem>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-link"></i>
            <span>Multilevel</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#">Link in level 2</a></li>
            <li><a href="#">Link in level 2</a></li>
          </ul>
        </li>
      </SideMenu>
    </SideBar>
    <Content>
      <slot />
    </Content>
    <Modal></Modal>
  </div>
</template>

<script>
import Modal from 'va/components/Modal.vue'
import Header from '@/components/organisms/Layout/Header.vue'
import SideBar from '@/components/organisms/Layout/SideBar.vue'
import SideMenu from '@/components/organisms/Layout/SideMenu.vue'
import MenuItem from '@/components/molecules/Layout/SideMenuItem.vue'
import SubMenuItem from '@/components/molecules/Layout/SideMenuSubItem.vue'
import Content from '@/components/organisms/Layout/Content.vue'
import Profile from '@/components/molecules/Layout/Profile.vue'
export default {
  name: 'app',
  components: {
    Modal,
    Header,
    Content,
    SideBar,
    SideMenu,
    Profile,
    MenuItem,
    SubMenuItem,
  },
}
</script>
