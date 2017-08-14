import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './Frame.component';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../Share/Components/share.module';
import { ChildFrameComponent } from './ChildFrame/ChildFrame.component';

const routing: Routes = [
    {
        path: '',
        component: FrameComponent
    }
];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule(
    {
        imports: [
            CommonModule,
            Routing,
            ShareModule
        ],
        declarations: [
            FrameComponent,
            ChildFrameComponent
        ],
        entryComponents: [
            ChildFrameComponent
        ]
    }
)
export class FrameModule { }
