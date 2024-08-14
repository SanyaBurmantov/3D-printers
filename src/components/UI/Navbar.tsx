import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


export default function NavbarHeader() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />

            <NavbarMenu style={{paddingTop: "80px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div className="">
                <NavbarMenuItem>
                    <Link

                        className="w-full"
                        href="/fdm_fff"
                        size="lg"
                    >
                        FDM/FFF
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link

                        className="w-full"
                        href="/sla"
                        size="lg"
                    >
                        SLA
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link

                        className="w-full"
                        href="/slm"
                        size="lg"
                    >
                        SLM
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link

                        className="w-full"
                        href="/sls"
                        size="lg"
                    >
                        SLS
                    </Link>
                </NavbarMenuItem>
                </div>
                <div className="">
                <div className="">+37533 342234234234</div>
                <div className="">info@sparxlab.by</div>.
                </div>
            </NavbarMenu>
        </Navbar>
    );
}
