import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";
import { useState } from "react";

export default function MenuWeb() {
    const [showModal, setShowModal] = useState(false);
    const onShowModal = () => setShowModal = true;

    return (
        <div className = "menu">
            <Container>
                <Grid>
                    <Grid.Column className = "menu_left" width = {6}>
                        <MenuPlatforms />
                    </Grid.Column>

                    <Grid.Column className = "menu_right" width = {10}>
                        <MenuOptions onShowModal = {onShowModal}/>
                    </Grid.Column>
                </Grid>
            </Container>

            <BasicModal show = {showModal} setShow = {setShowModal} title = "Inicia sesión">
                <h2>Basic Modal</h2>
            </BasicModal>
        </div>
    )
}

function MenuPlatforms() {
    return (
        <Menu>
            <Link href = "/play-station">
                <Menu.Item as = "a">
                    Play Station
                </Menu.Item>
            </Link>

            <Link href = "/xbox">
                <Menu.Item as = "a">
                    Xbox
                </Menu.Item>
            </Link>

            <Link href = "/switch">
                <Menu.Item as = "a">
                    Switch
                </Menu.Item>
            </Link>

            <Link href = "/PC">
                <Menu.Item as = "a">
                    PC
                </Menu.Item>
            </Link>
            
        </Menu>
    )
}

function MenuOptions(props) {
    const {onShowModal} = props;

    return (
        <Menu>
            <Menu.Item onClick = {onShowModal}>
                <Icon name = "user outline">Mi cuenta</Icon>
            </Menu.Item>
        </Menu>
        
    )
}
