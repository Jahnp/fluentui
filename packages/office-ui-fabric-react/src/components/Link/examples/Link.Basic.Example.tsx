import * as React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Dialog, DialogFooter, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton, CompoundButton } from 'office-ui-fabric-react/lib/Button';
import { Customizer } from 'office-ui-fabric-react/lib/Utilities';
import { FontWeights } from 'office-ui-fabric-react/lib/Styling';
import './Link.Example.scss';

/** Definitions for Depth, or shadow, levels. */
const FluentDepthLevels = {
  /**
   * Level 0 of Fluent Depth system.
   * Recommended uses: Surfaces.
   * */
  Level0: '0 0 0 0 transparent',

  /**
   * Level 1 of Fluent Depth system.
   * Recommended uses: Buttons, Cards, Grid items, List items.
   * */
  Level1: '0 2px 4px -0.75px rgba(0, 0, 0, 0.1)',

  /**
   * Level 2 of Fluent Depth system.
   * Recommended uses: Command Bar, Contextual Menus.
   * */
  Level2: '0 4px 8px -1px rgba(0, 0, 0, 0.1)',

  /**
   * Level 3 of Fluent Depth system.
   * Recommended uses: Teaching Callouts, Search Results, Dropdowns, Hover cards, Tooltips.
   * */
  Level3: '0 8px 10px -2px rgba(0, 0, 0, 0.1)',

  /**
   * Level 4 of Fluent Depth system.
   * Recommended uses: Panels, Dialogs.
   * */
  Level4: '0 16px 18px -4px rgba(0, 0, 0, 0.1)'
};

const linkStyles = {
  root: {
    color: 'red',
    background: 'transparent'
  }
};

const PrimaryButtonStyles = {
  root: {
    borderRadius: 2,
    boxShadow: FluentDepthLevels.Level1
  }
};

const CompoundButtonStyles = {
  root: {
    borderRadius: 2,
    boxShadow: FluentDepthLevels.Level1
  }
};

const DefaultButtonStyles = {
  root: {
    borderRadius: 2,
    boxShadow: FluentDepthLevels.Level1
  }
};

// Note: For some reason, all Dialog style overrides aren't being respected here.
const DialogStyles = {
  main: {
    boxShadow: FluentDepthLevels.Level4,
    border: '2px solid red'
  }
};

const DialogContentStyles = {
  title: {
    fontWeight: FontWeights.semibold,
    color: 'red'
  }
};

// Roll up all style overrides in a single "Fluent theme" object
const FluentStyles = {
  Link: {
    styles: linkStyles
  },
  PrimaryButton: {
    styles: PrimaryButtonStyles
  },
  DefaultButton: {
    styles: DefaultButtonStyles
  },
  CompoundButton: {
    styles: CompoundButtonStyles
  },
  Dialog: {
    styles: DialogStyles
  },
  DialogContent: {
    styles: DialogContentStyles
  }
};

export class LinkBasicExample extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);

    this.state = {
      hideDialog: true
    };
  }

  public render(): JSX.Element {
    return (
      <Customizer scopedSettings={{ ...FluentStyles }}>
        <div className="docs-LinkExample">
          <span>When a link has an href, </span>
          <Link href="http://dev.office.com/fabric/components/link">it renders as an anchor tag.</Link>
          <span> Without an href, </span>
          <Link>the link is rendered as a button</Link>.
          <span> You can also use the disabled attribute to create a </span>
          <Link disabled={true} href="http://dev.office.com/fabric/components/link">
            disabled link
          </Link>.
          <div>
            <DefaultButton secondaryText="Opens the Sample Dialog" onClick={this._showDialog} text="Open Dialog" />
          </div>
          <div>
            <h2>Primary Button</h2>
            <PrimaryButton onClick={this._closeDialog} text="Save" />
          </div>
          <div>
            <h2>Default Button</h2>
            <DefaultButton onClick={this._closeDialog} text="Cancel" />
          </div>
          <div>
            <h2>Compound Button</h2>
            <CompoundButton onClick={this._closeDialog} text="Cancel" />
          </div>
          <Dialog
            hidden={this.state.hideDialog}
            onDismiss={this._closeDialog}
            dialogContentProps={{
              type: DialogType.normal,
              title: 'All emails together',
              subText:
                'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
            }}
            modalProps={{
              titleAriaId: 'myLabelId',
              subtitleAriaId: 'mySubTextId',
              isBlocking: false,
              containerClassName: 'ms-dialogMainOverride'
            }}
          >
            <DialogFooter>
              <PrimaryButton onClick={this._closeDialog} text="Save" />
              <DefaultButton onClick={this._closeDialog} text="Cancel" />
            </DialogFooter>
          </Dialog>
        </div>
      </Customizer>
    );
  }

  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  };

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  };
}
