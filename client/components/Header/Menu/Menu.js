import { Container, Menu, Grid, Icon, Label, GridColumn } from "semantic-ui-react";
import Link from "next/link";

export default function MenuWeb() {
    return (
        <div className = "menu">
            <Container>
                <Grid>
                    <Grid.Column className = "menu_left" width = {6}>
                        <MenuPlatforms />
                    </Grid.Column>

                    <Grid.Column className = "menu_right" width = {10}>
                        <MenuOptions />
                    </Grid.Column>
                </Grid>
            </Container>
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

function MenuOptions() {
    return (
        <Menu>
            <Menu.Item>
                <Icon name = "user otuline">Mi cuenta</Icon>
            </Menu.Item>
        </Menu>
        
    )
}
